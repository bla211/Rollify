export default{
    hasAccessCode: null,
    accessCode: '',
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    originPlanInfo: {
        sponsor: 'New York - Presbyterian Hospital',
        name: 'New York - Presbyterian Hospital Tax Sheltered Anuity Plan',
        accountNumber: 'TA 0450-42455',
        affiliateNumber: '0002',
        division: 'NYP'
    },
    destinationPlanInfo: {
        sponsor: 'Mount Sinai Hospital',
        name: 'Mount Sinai Hospital 403b Employee Retirement Fund',
        accountNumber: 'VAN 0459693',
        affiliateNumber: '0023',
        division: 'N/A'
    },
    socialSecurityNumber: '230-23-1234',
    mailingAddress: '',
    mailingAddress2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    reasonForRollover: null,
    reasonForRolloverOptions: ['Termination', 'Retirement', 'Age 59 1/2'],
    typeOfRollover: null,
    typeOfRolloverOptions: ['Traditional IRA', 'Taxable portion in traditional IRA and non-taxable Roth IRA', 'Rollover to an eligible retirement fund'],
    getFunds: null,
    getFundsOptions: ['Mail me a check', 'Direct deposit'],
    fundTransfer: null,
    fundTransferOptions: ['Check at my mail', 'Wire (Costs may apply)', 'Use Rollify'],
    destinationDropdownOpen: null
};
