import type {
  FindOneArgs,
  PayloadRequestWithData,
  SanitizedCollectionConfig,
  TypeWithID,
} from 'payload'

import toSnakeCase from 'to-snake-case'

import type { DrizzleAdapter } from './types.js'

import { findMany } from './find/findMany.js'

export async function findOne<T extends TypeWithID>(
  this: DrizzleAdapter,
  { collection, locale, req = {} as PayloadRequestWithData, where }: FindOneArgs,
): Promise<T> {
  const collectionConfig: SanitizedCollectionConfig = this.payload.collections[collection].config

  const tableName = this.tableNameMap.get(toSnakeCase(collectionConfig.slug))

  const { docs } = await findMany({
    adapter: this,
    fields: collectionConfig.fields,
    limit: 1,
    locale,
    page: 1,
    pagination: false,
    req,
    sort: undefined,
    tableName,
    where,
  })

  return docs?.[0] || null
}
