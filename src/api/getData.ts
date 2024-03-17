type Params = Record<string, string>;

export const getData = async (url: string, params?: Params) => {
  try {
    if (!URL.canParse(url)) {
      throw new Error("Invalid URL");
    }

    const parsedUrl = new URL(url);

    for (const param in params) {
      parsedUrl.searchParams.set(param, params[param]);
    }

    const resp = await fetch(parsedUrl);

    if (!resp.ok) {
      throw new Error("Cant request data");
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
