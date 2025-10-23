/**
 * Stale
 * - A module that marks items as stale after a certain period.
 * - Useful for caching mechanisms where data needs to be refreshed periodically.
 * - Provides functions to set, check, and clear stale items.
 *    Example:
 *    const isStale = checkStale(itemId);
*/

/**
 * Definition
 * - It refers to data or items that are considered outdated or no longer valid after a certain period.
 * - Stale data may need to be refreshed or re-fetched to ensure accuracy and relevance.
 * - Commonly used in caching strategies to improve performance while ensuring data integrity.
 * - Stale items can be identified by timestamps or expiration times.
 * - Managing stale data is crucial in applications that rely on real-time or frequently updated information.
 * - Strategies to handle stale data include time-based expiration, versioning, and manual invalidation.
 * - Proper handling of stale data helps maintain application performance and user experience.
 */
export function setStale(itemId, duration) {
    const expiryTime = Date.now() + duration;
    localStorage.setItem(`stale_${itemId}`, expiryTime);
}