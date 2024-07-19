export function imgurWebp(
  url: string | ImageMetadata,
  resolution: number = 520
) {
  const src = typeof url === 'string' ? url : url.src

  return src?.includes('imgur')
    ? src
        .replace(
          /(\.png)|(\.jpg)/,
          `_d.webp?maxwidth=${resolution}&shape=thumb&fidelity=high`
        )
        .replace(/.*imgur.com/, 'https://i.imgur.com')
    : src
}
