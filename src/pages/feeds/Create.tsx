import * as _ from "lodash";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toBase64 } from "../../common/util";
import { useFeed } from "../../hooks/use-feed";

export const FeedCreatePage = () => {
  // custom hooks
  const { createFeedMutation } = useFeed();

  const [feedImages, setFeedImages] = useState<string[]>([]);
  const imgFileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    watch,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      feedDesc: "",
    },
    mode: "onChange",
  });

  const submit = () => {
    if (!feedImages.length) {
      return alert("이미지를 등록해 주세요.");
    }
    createFeedMutation.mutate({ feedDesc: getValues("feedDesc"), feedImages });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    _.forEach(event.target.files, async (file) => {
      const base64Str: string = await toBase64(file);
      setFeedImages((prev) => prev.concat(base64Str));
    });
  };

  return (
    <div>
      <h4>피드 작성</h4>
      <Form onSubmit={handleSubmit(submit)}>
        {feedImages.length ? (
          <div className="h-[80px]">
            {feedImages.map((feedImage, index) => {
              return (
                <img
                  key={index}
                  src={feedImage}
                  className="h-full object-cover"
                />
              );
            })}
          </div>
        ) : (
          <Button onClick={() => imgFileRef.current?.click()}>
            이미지 등록
          </Button>
        )}

        <input
          ref={imgFileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChangeFile}
        />

        <Form.Group className="mb-3" controlId="feedDesc">
          <Form.Label htmlFor="">내용</Form.Label>
          <FormControl
            style={{ height: "unset" }}
            as="textarea"
            className={clsx("resize-none")}
            isInvalid={errors?.feedDesc ? true : false}
            wrap="hard"
            rows={4}
            {...register("feedDesc", { maxLength: 40 })}
          />
          <div className="text-right">{watch("feedDesc").length}/40</div>
          {errors.feedDesc ? (
            <div className="text-red-500">40자 이내로 작성해주세요.</div>
          ) : (
            ""
          )}
        </Form.Group>
        <FormControl
          as={Button}
          variant={"success"}
          children="등록"
          type="submit"
        />
      </Form>
    </div>
  );
};
