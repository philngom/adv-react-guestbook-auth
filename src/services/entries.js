import { client, parseData } from './client';

export async function createEntry({ userId, entry }) {
  const request = await client
  .from('entries')
  .insert({
    guest_id: userId,
    content: entry
  })

  return parseData(request);
}

export async function getEntries() {
  const request = await client
  .from('entries')
  .select()
  .order('created_at', { ascending: false })

  return parseData(request);
}