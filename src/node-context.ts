import { readFile } from 'node:fs/promises'

import { normalizeSkillBody } from './server.js'

const skillPath = new URL('../content/lightningchart-dotnet/SKILL.md', import.meta.url)
let cachedSkillBody: Promise<string> | undefined

export function getLightningChartSkillBody(): Promise<string> {
    cachedSkillBody ??= readFile(skillPath, 'utf8').then(normalizeSkillBody)
    return cachedSkillBody
}

