import type { Block } from 'payload/types'

import { sanitizeFields } from 'payload/config'

import type { BlocksFeatureProps } from '.'
import type { AfterReadPromise } from '../types'
import type { SerializedBlockNode } from './nodes/BlocksNode'

import { recurseNestedFields } from '../../../populate/recurseNestedFields'

export const blockAfterReadPromiseHOC = (
  props: BlocksFeatureProps,
): AfterReadPromise<SerializedBlockNode> => {
  const blockAfterReadPromise: AfterReadPromise<SerializedBlockNode> = ({
    afterReadPromises,
    currentDepth,
    depth,
    field,
    node,
    overrideAccess,
    req,
    showHiddenFields,
    siblingDoc,
  }) => {
    const blocks: Block[] = props.blocks
    const blockFieldData = node.fields.data

    const promises: Promise<void>[] = []

    // Sanitize block's fields here. This is done here and not in the feature, because the payload config is available here
    const payloadConfig = req.payload.config
    const validRelationships = payloadConfig.collections.map((c) => c.slug) || []
    blocks.forEach((block) => {
      block.fields = sanitizeFields({
        config: payloadConfig,
        fields: block.fields,
        validRelationships,
      })
    })

    // find block used in this node
    const block = props.blocks.find((block) => block.slug === blockFieldData.blockType)
    if (!block || !block?.fields?.length || !blockFieldData) {
      return promises
    }

    recurseNestedFields({
      afterReadPromises,
      currentDepth,
      data: blockFieldData,
      depth,
      fields: block.fields,
      overrideAccess,
      promises,
      req,
      showHiddenFields,
      siblingDoc,
    })

    return promises
  }

  return blockAfterReadPromise
}
