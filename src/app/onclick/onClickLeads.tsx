'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function onClickLead(id: string) {
  
  console.log(id)
  revalidatePath('/lead') // Update cached posts
  redirect(`/lead/${id}`) // Navigate to the new post page
}

export default onClickLead;