/*
 * © 2021 ThoughtWorks, Inc.
 */

import { Cost } from './cost'
import {
  FootprintEstimate,
  CloudConstants,
  CloudConstantsEmissionsFactors,
} from '.'

export default interface ICloudService {
  serviceName: string
  getEstimates(
    start: Date,
    end: Date,
    region: string,
    emissionsFactors: CloudConstantsEmissionsFactors,
    constants: CloudConstants,
  ): Promise<FootprintEstimate[]>
  getCosts(start: Date, end: Date, region: string): Promise<Cost[]>
}
