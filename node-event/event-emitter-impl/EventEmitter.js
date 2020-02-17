class EventEmitter {
  constructor() {
    this.events = {};
  }

  on (eventName, callbackFn) {
    if (!this.events[eventName])  {
      this.events[eventName] = []
    }
    this.events[eventName].push(callbackFn)
  }

  emit (eventName, eventData) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach(fn => fn(eventData))  
  }

  
}
