import { routes as artistRoutes } from "Apps/Artist/routes"
import { routes as artworkRoutes } from "Apps/Artwork/routes"
import { collectRoutes } from "Apps/Collect/collectRoutes"
import { conversationRoutes } from "Apps/Conversation/routes"
import { routes as featureRoutes } from "Apps/FeatureAKG/routes"
import { routes as identityVerificationRoutes } from "Apps/IdentityVerification/routes"
import { routes as orderRoutes } from "Apps/Order/routes"
import { routes as searchRoutes } from "Apps/Search/routes"
import { buildAppRoutes } from "Artsy/Router/buildAppRoutes"
import { RouteConfig } from "found"

export function getAppRoutes(): RouteConfig[] {
  return buildAppRoutes([
    {
      routes: artistRoutes,
    },
    {
      routes: artworkRoutes,
    },
    {
      routes: collectRoutes,
    },
    {
      routes: conversationRoutes,
    },
    {
      routes: orderRoutes,
    },
    {
      routes: searchRoutes,
    },
    {
      routes: identityVerificationRoutes,
    },
    {
      routes: featureRoutes,
    },
  ])
}
