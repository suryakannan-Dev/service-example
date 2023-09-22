export async function getCaptcha(
  ctx: Context, 
  next: () => Promise<any>) {

  const {clients: { getCaptchadetails }} = ctx

  ctx.body= await getCaptchadetails.getCaptchadetails()

  await next() 
} 