export const PROPS_COLUMN = Object.freeze({
  FULL_NAME: 'fullname',
  ID: 'identity_card',
  DOB: 'dob',
  HOME_TOWN: 'hometown',
  STATUS: 'status',
  LAST_EDITED: 'last_edited'
})

export const COLUMN_TABLE_USER = Object.freeze([
  {
    id: PROPS_COLUMN.FULL_NAME,
    label: 'Họ và tên',
    minWidth: 250,
  },
  {
    id: PROPS_COLUMN.ID,
    label: 'CMND/CCCD',
    minWidth: 150,
  },
  {
    id: PROPS_COLUMN.DOB,
    label: 'Ngày tháng năm sinh',
    minWidth: 150,
  },
  {
    id: PROPS_COLUMN.HOME_TOWN,
    label: 'Quê quán',
    minWidth: 250,
  },
  {
    id: PROPS_COLUMN.STATUS,
    label: 'Trạng thái',
    minWidth: 150,
  },
  {
    id: PROPS_COLUMN.LAST_EDITED,
    label: 'Lần cập nhật cuối',
    minWidth: 250,
  },
])
