import { Svix ,Webhook} from "svix";
import { headers, cookies } from "next/headers";
import { WebhookEvent } from '@clerk/nextjs/server'
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { CreateUser } from "@/lib/action";
import { Iuser } from "@/lib/mongoose";
 
 export    async function POST (req :Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }
 
    const headerPayload = headers();
    console.log()
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
          status: 400
        })
      }
      console.log("sds")
const paylaod = await req.json()
const body =  JSON.stringify(paylaod)
const wh= new Webhook(WEBHOOK_SECRET)
let evt : WebhookEvent
try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  const { id } = evt.data;
  const eventType = evt.type;
  if (evt.type ==='user.created' ) {
    const { id, email_addresses, image_url,  username } = evt.data;
    console.log("ee")
    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      photo: image_url,
    }
    const newser = await CreateUser(user) as Iuser | any
    if(newser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newser._id
        }
      })
  
    }

  }
}


