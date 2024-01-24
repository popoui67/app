import { Svix ,Webhook} from "svix";
import { headers } from "next/headers";
import type { WebhookEvent  } from "@clerk/clerk-sdk-node"
import { clerkClient } from "@clerk/nextjs";
import { NextRequest } from "next/server";
import { CreateUser } from "@/lib/action";
import { Iuser } from "@/lib/mongoose";
 
 export const POST = async(req :Request) => {
 
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
          status: 400
        })
      }
const paylaod = await req.json()
const body =  JSON.stringify(paylaod)
const wh= new Webhook(process.env.NEXT_PUBLIC_CLERK_SECRET!)
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


  if (evt.type ==='user.created' ) {
    const { id, email_addresses, image_url,  username } = evt.data;
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


