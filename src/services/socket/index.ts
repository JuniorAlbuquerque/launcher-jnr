import socketClient, { Socket } from 'socket.io-client'

export enum SocketListener {
  MEMORY = 'MEMORY',
  CPU = 'CPU',
  DISK = 'DISK',
  PING = 'PING'
}

export class SocketService {
  private socket: Socket
  private urlSocket = 'http://localhost:3333'
  private transports = ['websocket', 'polling', 'flashsocket']

  constructor() {
    this.socket = socketClient(this.urlSocket, {
      transports: this.transports
    })
  }

  onMessage<T>(
    message: SocketListener,
    listener: (...args: T[]) => void
  ): Socket {
    return this.socket.on(message, listener)
  }

  off(topic: SocketListener) {
    return this.socket.off(topic)
  }

  unlistener(): void {
    this.socket.disconnect()
  }
}

export default new SocketService()
