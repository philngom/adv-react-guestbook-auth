import { client, parseData } from './client';

export async function creatEntry({ email, entry }) {
  const request = await client
  .from('entries')
  .insert({
    guest_id: email,
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