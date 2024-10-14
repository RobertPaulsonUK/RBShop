import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['ua', 'ru'],
    defaultLocale: 'ua',
    localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation(routing);