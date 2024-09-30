/**
 * Calculates permissions for a given user.
 *
 * Returns true if:
 *  - isAdmin is true, OR
 *  - isMember is true AND isOwner is true
 *
 * @param {boolean} isAdmin - The user is an admin.
 * @param {boolean} isMember - The user is a member.
 * @param {boolean} isOwner - The user is the owner.
 * @returns {boolean} - true if the user can edit, false otherwise.
 */
export function permissions(isAdmin, isMember, isOwner) {
  const canEdit = isAdmin || (isMember && isOwner)
  return canEdit
}
