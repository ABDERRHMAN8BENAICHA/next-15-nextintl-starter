import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('pages.notFound');

    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}
