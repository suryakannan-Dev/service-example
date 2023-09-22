import { IOClients } from '@vtex/api'
import Status from './status'
import GetContact from './getContact'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get GetContact() { 
    return this.getOrSet('getContact', GetContact)
  }

  public get getCaptchadetails() { 
    return this.getOrSet('getCaptch', GetContact)
  }
}
