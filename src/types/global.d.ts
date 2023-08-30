declare global {
  type Nullable<T> = T | null

  type Maybe<T> = T | undefined

  type Falsable<T> = T | false

  type Async<T> = Promise<T> | T

  type BooksProvider = 'google-books' | 'open-library'

  type RequestPayload = {
    path: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS'
    body?: RequestBody
    params?: RequestQuery
  }

  type RequestQuery = Record<string, string | string[] | boolean | number | number[] | null>

  type RequestHeaders = Record<string, string | boolean | number>

  type RequestBody = Record<string, string | boolean | number | object | null>

  type RequestParamsWithId = {
    params: {
      bookId: string
      authorId: string
      categoryId: string
    }
  }

  type CountryCode =
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW'

  type LanguageCode =
    | 'aa'
    | 'ab'
    | 'ae'
    | 'af'
    | 'af-ZA'
    | 'ak'
    | 'am'
    | 'an'
    | 'ar'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'as'
    | 'av'
    | 'ay'
    | 'az'
    | 'az-AZ'
    | 'ba'
    | 'be'
    | 'be-BY'
    | 'bg'
    | 'bg-BG'
    | 'bi'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'bs-BA'
    | 'ca'
    | 'ca-ES'
    | 'ce'
    | 'ch'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cs-CZ'
    | 'cu'
    | 'cv'
    | 'cy'
    | 'cy-GB'
    | 'da'
    | 'da-DK'
    | 'de'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'dv'
    | 'dv-MV'
    | 'dz'
    | 'ee'
    | 'el'
    | 'el-GR'
    | 'en'
    | 'en-AU'
    | 'en-AU'
    | 'en-BZ'
    | 'en-CA'
    | 'en-CB'
    | 'en-GB'
    | 'en-IE'
    | 'en-JM'
    | 'en-NZ'
    | 'en-PH'
    | 'en-TT'
    | 'en-US'
    | 'en-ZA'
    | 'en-ZW'
    | 'eo'
    | 'es'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-ES'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-UY'
    | 'es-VE'
    | 'et'
    | 'et-EE'
    | 'eu'
    | 'eu-ES'
    | 'fa'
    | 'fa-IR'
    | 'ff'
    | 'fi'
    | 'fi-FI'
    | 'fj'
    | 'fo'
    | 'fo-FO'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'fr-LU'
    | 'fr-MC'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'gl-ES'
    | 'gn'
    | 'gu'
    | 'gu-IN'
    | 'gv'
    | 'ha'
    | 'he'
    | 'he-IL'
    | 'hi'
    | 'hi-IN'
    | 'ho'
    | 'hr'
    | 'hr-BA'
    | 'hr-HR'
    | 'ht'
    | 'hu'
    | 'hu-HU'
    | 'hy'
    | 'hy-AM'
    | 'hz'
    | 'ia'
    | 'id'
    | 'id-ID'
    | 'ie'
    | 'ig'
    | 'ii'
    | 'ik'
    | 'io'
    | 'is'
    | 'is-IS'
    | 'it'
    | 'it-CH'
    | 'it-IT'
    | 'iu'
    | 'ja'
    | 'ja-JP'
    | 'jv'
    | 'ka'
    | 'ka-GE'
    | 'kg'
    | 'ki'
    | 'kj'
    | 'kk'
    | 'kk-KZ'
    | 'kl'
    | 'km'
    | 'kn'
    | 'kn-IN'
    | 'ko'
    | 'ko-KR'
    | 'kr'
    | 'ks'
    | 'ku'
    | 'kv'
    | 'kw'
    | 'ky'
    | 'ky-KG'
    | 'la'
    | 'lb'
    | 'lg'
    | 'li'
    | 'ln'
    | 'lo'
    | 'lt'
    | 'lt-LT'
    | 'lu'
    | 'lv'
    | 'lv-LV'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'mi-NZ'
    | 'mk'
    | 'mk-MK'
    | 'ml'
    | 'mn'
    | 'mn-MN'
    | 'mr'
    | 'mr-IN'
    | 'ms'
    | 'ms-BN'
    | 'ms-BY'
    | 'mt'
    | 'mt-MY'
    | 'my'
    | 'na'
    | 'nb'
    | 'nb-NO'
    | 'nd'
    | 'ne'
    | 'ng'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'nn-NO'
    | 'no'
    | 'nr'
    | 'ns'
    | 'ns-ZA'
    | 'nv'
    | 'ny'
    | 'oc'
    | 'oj'
    | 'om'
    | 'or'
    | 'os'
    | 'pa'
    | 'pa-IN'
    | 'pi'
    | 'pl'
    | 'pl-PL'
    | 'ps'
    | 'ps-AR'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'qu'
    | 'qu-BO'
    | 'qu-EC'
    | 'qu-PE'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'ro-RO'
    | 'ru'
    | 'ru-RU'
    | 'rw'
    | 'sa'
    | 'sa-IN'
    | 'sc'
    | 'sd'
    | 'se'
    | 'se-FI'
    | 'se-NO'
    | 'se-SE'
    | 'sg'
    | 'si'
    | 'sk'
    | 'sk-SK'
    | 'sl'
    | 'sl-SI'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sq'
    | 'sq-AL'
    | 'sr'
    | 'sr-BA'
    | 'sr-SP'
    | 'ss'
    | 'st'
    | 'su'
    | 'sv'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw'
    | 'sw-KE'
    | 'ta'
    | 'ta-IN'
    | 'te'
    | 'te-IN'
    | 'tg'
    | 'th'
    | 'th-TH'
    | 'ti'
    | 'tk'
    | 'tl'
    | 'tl-PH'
    | 'tn'
    | 'tn-ZA'
    | 'to'
    | 'tr'
    | 'tr-TR'
    | 'ts'
    | 'tt'
    | 'tt-RU'
    | 'tw'
    | 'ty'
    | 'ug'
    | 'uk'
    | 'uk-UA'
    | 'ur'
    | 'ur-PK'
    | 'uz'
    | 'uz-UZ'
    | 've'
    | 'vi'
    | 'vi-VN'
    | 'vo'
    | 'wa'
    | 'wo'
    | 'xh'
    | 'xh-ZA'
    | 'yi'
    | 'yo'
    | 'za'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-MO'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu'
    | 'zu-ZA'
}

export default {}
