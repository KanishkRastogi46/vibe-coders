import { extname } from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(String(supabaseUrl), String(supabaseKey));

export default async function uploadImage(file: File): Promise<string | null> {
    try {
        const { data, error } = await supabase
            .storage
            .from(String(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_ID))
            .upload(`images/${new Date().getMilliseconds()}.${extname(file.name)}`, file, {
                cacheControl: '3600',
                upsert: false
            })
            // console.log("data", data);
            // console.log("error", error);
            return data?.fullPath || error?.message || "Failed to upload image";
    } catch (error) {
        console.error(error);
        return null;
    }
}