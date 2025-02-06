/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ChainProfile {
  name?: string;
  pretty_name?: string;
  type?: "DeFi" | "NFT" | "Gaming" | "Manage Portfolio";
  tags?: string[];
  /**
   * A longer description for the landing page
   */
  description?: string;
  /**
   * A short description for the onboarding page (less than 50 characters)
   */
  summary?: string;
  /**
   * Modify saturation and luminance for the ecosystem or the vip
   */
  color?: string;
  status?: "live" | "upcoming";
  vip?: {
    actions?: {
      title?: string;
      description?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  social?: {
    website?: string;
    twitter?: string;
    [k: string]: unknown;
  };
  l2?: boolean;
  [k: string]: unknown;
}
