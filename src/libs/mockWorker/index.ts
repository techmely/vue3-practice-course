import postHandlers from '@/modules/posts/__mock__/handler'

import { setupWorker } from 'msw/browser'

export const mockWorker = setupWorker(...postHandlers)
