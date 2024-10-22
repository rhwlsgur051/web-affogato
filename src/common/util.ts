import { useUserStore } from "../stores/user";

export const toBase64 = (file: File): Promise<any> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const logout = () => {
  useUserStore.setState({ user: null });
  useUserStore.persist.clearStorage();
  location.href = "/login";
};
