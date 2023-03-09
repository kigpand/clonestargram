import axios from "axios";

export const onAddFollow = async (data: any) => {
  try {
    const result = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${data}/follow`
    );
    return result;
  } catch {
    return false;
  }
};

export const onDeleteFollow = async (data: any) => {
  try {
    const result = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${data}/follow`
    );
    return result;
  } catch {
    return false;
  }
};
