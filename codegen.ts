import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'lt_crm_qql_scheme.graphql',
    documents: ['src/**/*.gql'],

    generates: {
        'src/shared/graphql/types.ts': {
            plugins: [
                'typescript',
                'typescript-operations'
            ],
        },
    },
};

export default config;
