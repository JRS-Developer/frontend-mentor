import { ShortLinkI } from '../interfaces'
import CopyButton from './CopyButton'

const ShortLink = ({ shortLink, originalLink }: ShortLinkI) => {
    return (
        <li className="flex flex-col bg-white gap-4 p-4 items-stretch md:items-center md:flex-row">
            <p className="max-w-full md:max-w-1/2 truncate">
                {originalLink}
            </p>
            <p className="text-primary md:ml-auto">
                {shortLink}
            </p>
            <CopyButton shortLink={shortLink} />
        </li>
    )
}

export default ShortLink
