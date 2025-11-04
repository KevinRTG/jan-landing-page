import { supabase } from './supabaseClient';

export async function findKeywordPath(query: string): Promise<string | null> {
  const trimmed = query.trim().toLowerCase();

  const { data, error } = await supabase
    .from('keywords')
    .select('path')
    .ilike('keywords', `%${trimmed}%`)
    .limit(1);

  if (error) {
    console.error('Supabase keywords search error:', error.message);
    return null;
  }

  return data?.[0]?.path || null;
}
