'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    }

    async submitTransaction() {
        let args = {
            contractId: 'mycc',
            contractFunction: 'sgxTx',
            invokerIdentity: 'Admin@org1.example.com',
            contractArguments: ["a/b","true","true","workload1","c"],
            timeout: 45,
            readOnly: false

        }

        await this.sutAdapter.sendRequests(args);
    }

    async cleanupWorkloadModule() {
        // NOOP
    }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
