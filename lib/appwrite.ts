

export const appWriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_CLOUD,
  platform: 'com.spudsprout',
  projectId: process.env.EXPO_PROJECTID,
  databaseId: process.env.EXPO_DATABASEID,
  blogCollectionId: process.env.EXPO_BLOGSCOLLECTIONID,
  usersCollectionId: process.env.EXPO_USERCOLLECTIONID
}
