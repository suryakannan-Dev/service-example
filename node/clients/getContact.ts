import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient, Apps } from '@vtex/api'

export default class GetContact extends ExternalClient {
  private app = new Apps(this.context)
  private setting: any | boolean = false
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://trika.vtexcommercestable.com.br`, context, { 
      ...options,
    })
  }

  private async getHeaders() {
    this.setting = await this.app.getAppSettings(process.env.VTEX_APP_ID ?? '')  
    console.log("settings:",this.setting);
    return {
      headers: {
        'Content-type': 'application/json', 
        'X-VTEX-API-AppKey': this.setting?.apiKey,
        'X-VTEX-API-AppToken': this.setting?.appToken
      }
    }
  }

  public async GetContact() {
    let data = {
      acronym: "QZ",
      fields : ["Email","Name","Subject","Message","UploadFile"],
      schema: 'validForm'
    } 
    const contactData = await this.http.get<Promise<any>>(
      `api/dataentities/${data.acronym}/search?_fields=${data.fields.map((i) => i)}&_schema=${data.schema}`, 
      await this.getHeaders()
    )
    return contactData
  }

  public async getCaptchadetails() {
    this.setting = await this.app.getAppSettings(process.env.VTEX_APP_ID ?? '')
    console.log("settings:",this.setting);
    return {
      sitekey:this.setting.recaptchaKey
    }
  }
}
