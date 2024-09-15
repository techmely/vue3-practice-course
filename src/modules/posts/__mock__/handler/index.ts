import { postHighlightHandler } from './postHighlight.mock'
import { postRecentHandler } from './postRecent.mock'
import { postTopHandler } from './postTop.mock'
import { postTrendingHandler } from './postTrending.mock'

const postHandlers = [
  ...postHighlightHandler,
  ...postRecentHandler,
  ...postTopHandler,
  ...postTrendingHandler,
]

export default postHandlers