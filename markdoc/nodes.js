import { link as linkNode } from '@markdoc/next.js/tags'

import { Link } from '../components/Link'

export const link = {
  ...linkNode,
  render: Link,
}
