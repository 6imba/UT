const updateUser = async ({ input }, context) => {
    const {
        profileId,
        role,
    } = input;

    const { dataSources } = context;
    const { customerV2API, userV3API } = dataSources;

    // inputValidator(input);

    const profileDataProjection = 'userId,email,customerId';

    const profileToEdit = await userV3API.getUserProfileById(profileId, { projection: profileDataProjection });

    const { customerId: companyId } = profileToEdit;

    if (role?.id) {
        const params = { role, companyId };
        const dataServices = { customerV2API, userV3API };
        await roleValidator(params, dataServices);
    }
    return { success: true };
};

module.exports = {
    updateUser,
};
