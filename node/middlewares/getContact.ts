export async function getContact(
  ctx: Context,
  next: () => Promise<any>) {

  const {clients: { GetContact }} = ctx 

  ctx.body = await GetContact.GetContact()

  await next() 
} 