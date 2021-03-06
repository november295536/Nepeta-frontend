export const postFormatter = {
  ISOStringToTimestamp(rawPost) {
    const post = {
      ...rawPost,
      lastEditTime: timestampBuilder(rawPost.lastEditTime),
      createTime: timestampBuilder(rawPost.createTime),
      publishedTime: timestampBuilder(rawPost.publishedTime),
    }

    return post
  },
  dateToISOString(rawPost) {
    const post = {
      ...rawPost,
      lastEditTime: dateFormater(rawPost.lastEditTime),
      createTime: dateFormater(rawPost.createTime),
      publishedTime: dateFormater(rawPost.publishedTime),
    }

    return post
  },
  javaInstantToJSDate(rawPost) {
    const post = {
      ...rawPost,
      lastEditTime: dateBuilder(rawPost.lastEditTime),
      createTime: dateBuilder(rawPost.createTime),
      publishedTime: dateBuilder(rawPost.publishedTime),
    }

    return post
  },
}

const timestampBuilder = (time) => {
  if (!time) return null
  return new Date(time).getTime() / 1000
}

const dateBuilder = (time) => {
  if (!time) return null
  return new Date(time * 1000)
}

const dateFormater = (date) => {
  if (!date) return null
  return date.toISOString().slice(0, 10)
}
