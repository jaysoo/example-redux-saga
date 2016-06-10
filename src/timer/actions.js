import { Observable } from 'rxjs'

export const start = () => (actions) =>
  Observable.timer(1000, 1000)
    .map(() => ({ type: 'TICK' }))
    .takeUntil(
      actions.ofType('STOP')
    )
    .startWith({ type: 'START' })

export const stop = () => ({ type: 'STOP' })

export const reset = () => ({ type: 'RESET' })
