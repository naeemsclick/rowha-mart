import { watchEffect } from 'vue';

export interface SeoOptions {
  title?: string;
  description?: string;
}

export function useSeo(options: SeoOptions) {
  watchEffect(() => {
    const defaultTitle = 'Rowha Mart | Small Choices Make a Brighter You.';
    const titleText = options.title ? `${options.title} | Rowha Mart` : defaultTitle;
    document.title = titleText;

    if (options.description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', options.description);
      }
    }
  });
}
