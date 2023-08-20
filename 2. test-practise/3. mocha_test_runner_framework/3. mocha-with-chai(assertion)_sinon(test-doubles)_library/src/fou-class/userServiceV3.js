const mergeAll  = () => 1;
class TimeoutDataSource {
    get(arg1, arg2, arg3) {
        return { data: 77 }
    }
    post(arg1, arg2, arg3) {
        return { data: { profiles: [11, 12, 13, 14] } }
    }
};

class UserServiceV3 extends TimeoutDataSource {
    constructor() {
        super()
        this.overrideToGet = 'http';
    }
    async getRolePermissions(roleId) {
        const params = {
            projection: 'GET_USER_ROLE_PERMISSIONS_PROJECTION',
            filter: roleId,
        };
        const { data: roles } = await this.get(
            `/customers/globalCustomerId/roles`,
            params,
            { headers: 'this.overrideToGet' }
        );
        return roles;
    }
    async getUserProfileById(profileId, options, companyId = 'all') {
        const { projection, filter } = options;
        const IN_STR = 'in';
        const params = {
            projection,
            filter: {
                ...filter,
                '#and': { 'profile.id': { [IN_STR]: [profileId] } },
            },
        };
        const { data } = await this.post(
            `/customers/${companyId}/profiles`,
            params,
            {
                headers: this.overrideToGet,
            }
        );
        return data?.profiles?.[0];
    }

}

module.exports = { UserServiceV3 };
