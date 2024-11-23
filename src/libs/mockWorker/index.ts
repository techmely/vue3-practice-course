import { setupWorker } from 'msw/browser'

import postHandlers from '@/modules/posts/__mock__/handler'

export const mockWorker = setupWorker(...postHandlers)
