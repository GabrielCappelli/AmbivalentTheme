# Ambivalent theme settings
THEME = 'Ambivalent'

SITE_LOGO = 'https://ambivalent.gabrielcappelli.com/theme/img/ambivalent.svg'
SITE_DESCR = "Welcome to Ambivalent's live demo!"

SOCIAL_MEDIA = (
    ('LinkedIn', 'lkdin.svg', 'https://www.linkedin.com/in/gabrielcappelli/'),
    ('StackOverflow', 'stackoverflow.svg', 'https://stackoverflow.com/users/10013232/gabriel-cappelli?tab=profile'),
    ('GitHub', 'github.svg', 'https://github.com/GabrielCappelli/AmbivalentTheme'),
    ('RSS', 'rss.svg', '/feeds/all.atom.xml'),
)
SOCIAL_MEDIA_FOOTER = True

SIDE_MENU_LINKS = (
    ('Home', '/'),
    ('Authors', '/authors.html'),
    ('Archives', '/archives.html'),
    ('Categories', '/categories.html'),
    ('Tags', '/tags.html'),
    ('Sample Page', '/pages/sample-page/index.html'),
)

LICENSE = 'ccsa'
SHOW_POWERED_BY = True

#GOOGLE_ANALYTICS = 'UA-162605114-1'
#GOOGLE_ADSENSE = ''
GOOGLE_TAG_MANAGER = 'GTM-TBCDL49'

DISQUS = 'ambivalent'

# Pelican settings
# Basic settings
SITEURL = 'https://ambivalent.gabrielcappelli.com'
RELATIVE_URLS = False
SITENAME = 'Ambivalent'
PATH = 'content'
OUTPUT_PATH = 'webdist/'
STATIC_PATHS = ['images', 'extra/robots.txt',]
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    }

DEFAULT_PAGINATION = 5

YEAR_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/index.html'
DAY_ARCHIVE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date:%d}/index.html'

# Locale settings

I18N_SUBSITES = {
    'pt_br': {
        'SITE_DESCR': 'Bem vindo ao live demo do Ambivalent',
        'SIDE_MENU_LINKS': (
                ('Início', '/pt_br/'),
                ('Autores', '/pt_br/authors.html'),
                ('Arquivados', '/pt_br/archives.html'),
                ('Categorias', '/pt_br/categories.html'),
                ('Tags', '/pt_br/tags.html'),
                ('Página de Exemplo', '/pt_br/pages/sample-page/index.html')
            )
        },
    }

languages_lookup = {
    'en': 'English',
    'pt_br': 'Português',
}

JINJA_FILTERS = { 'lang_name': lambda x: languages_lookup.get(x), }

# Themes
THEME = '../Ambivalent'

# URL Settings
ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
ARTICLE_LANG_URL = 'posts/{lang}/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_LANG_SAVE_AS = 'posts/{lang}/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
AUTHOR_URL = 'author/{slug}/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'
CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'

# Metadata
AUTHOR = 'Gabriel Cappelli'

# RSS Feeds
FEED_ALL_ATOM = 'feeds/all.atom.xml'
TAG_FEED_ATOM = 'feeds/{slug}.tag.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

# Plugins

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

PLUGIN_PATHS = ["../plugins/"]
PLUGINS = [
    'readtime', # https://github.com/getpelican/pelican-plugins/blob/master/readtime/
    'sitemap', # https://github.com/getpelican/pelican-plugins/blob/master/sitemap/
    'i18n_subsites', # https://github.com/getpelican/pelican-plugins/blob/master/i18n_subsites
]

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}
