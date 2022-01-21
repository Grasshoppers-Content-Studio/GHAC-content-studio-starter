import { createClient } from "contentful";

let client;

// DYNAMIC

export const getClient = async () => {
  if (client && client.geEntry) {
    return client;
  }
  client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
    resolveLinks: true,
  });
  return client;
};

export const getEntries = async (obj) => {
  // console.log('fetching entries: ', obj)
  const c = await getClient();
  return c.getEntries(obj);
};

export const getEntryByField = async (key, value, type) => {
  const fieldKey = `fields.${key}`;
  const data = await getEntries({
    content_type: type,
    [fieldKey]: value,
    include: 10,
  });

  return data;
};
