'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export async function onClickRow(id: string) {
  
  revalidatePath('/customer') // Update cached posts
  redirect(`/customer/${id}`) // Navigate to the new post page
}

export default onClickRow;