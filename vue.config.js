import { resolve } from 'path';
import PrerenderSPAPlugin from 'prerender-spa-plugin';

export function configureWebpack() {
    if (process.env.NODE_ENV !== 'production')
        return;
    return {
        plugins: [
            new PrerenderSPAPlugin(
                // Absolute path to compiled SPA
                resolve(__dirname, 'dist'),
                // List of routes to prerender
                ['/'],
                {}
            ),
        ]
    };
}