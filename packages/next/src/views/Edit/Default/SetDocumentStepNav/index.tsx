'use client'
import type { SanitizedCollectionConfig, SanitizedGlobalConfig } from 'payload'

import { getTranslation } from '@payloadcms/translations'
import {
  type StepNavItem,
  useConfig,
  useDocumentInfo,
  useEditDepth,
  useEntityVisibility,
  useStepNav,
  useTranslation,
} from '@payloadcms/ui/client'
import { useEffect } from 'react'

export const SetDocumentStepNav: React.FC<{
  collectionSlug?: SanitizedCollectionConfig['slug']
  globalLabel?: SanitizedGlobalConfig['label']
  globalSlug?: SanitizedGlobalConfig['slug']
  id?: number | string
  pluralLabel?: SanitizedCollectionConfig['labels']['plural']
  useAsTitle?: SanitizedCollectionConfig['admin']['useAsTitle']
  view?: string
}> = (props) => {
  const { id, collectionSlug, globalSlug, pluralLabel, useAsTitle } = props

  const view: string | undefined = props?.view || undefined

  const { isEditing, isInitializing, title } = useDocumentInfo()
  const { isEntityVisible } = useEntityVisibility()
  const isVisible = isEntityVisible({ collectionSlug, globalSlug })

  const { setStepNav } = useStepNav()

  const { i18n, t } = useTranslation()

  const {
    routes: { admin },
  } = useConfig()

  const drawerDepth = useEditDepth()

  useEffect(() => {
    const nav: StepNavItem[] = []

    if (!isInitializing) {
      if (collectionSlug) {
        nav.push({
          label: getTranslation(pluralLabel, i18n),
          url: isVisible ? `${admin}/collections/${collectionSlug}` : undefined,
        })

        if (isEditing) {
          nav.push({
            label: (useAsTitle && useAsTitle !== 'id' && title) || `${id}`,
            url: isVisible ? `${admin}/collections/${collectionSlug}/${id}` : undefined,
          })
        } else {
          nav.push({
            label: t('general:createNew'),
          })
        }
      } else if (globalSlug) {
        nav.push({
          label: title,
          url: isVisible ? `${admin}/globals/${globalSlug}` : undefined,
        })
      }

      if (view) {
        nav.push({
          label: view,
        })
      }

      if (drawerDepth <= 1) setStepNav(nav)
    }
  }, [
    setStepNav,
    isInitializing,
    isEditing,
    pluralLabel,
    id,
    useAsTitle,
    admin,
    t,
    i18n,
    title,
    collectionSlug,
    globalSlug,
    view,
    drawerDepth,
    isVisible,
  ])

  return null
}
