// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ISwitchboard} from "../../src/switchboard/ISwitchboard.sol";

/**
 * @title MockSwitchboard
 * @notice TBD
 */
contract MockSwitchboardFunctionV1 {
    address public mockFunctionId;
    address public functionAuthority;
    address public functionQueueId;
    address public functionEnclaveId;
    address[] public functionPermittedCallers;
    uint256 public functionBalance = 0;
    bytes32[] public functionMrEnclaves;
    ISwitchboard.FunctionStatus public functionStatus = ISwitchboard.FunctionStatus.NONE;
    ISwitchboard.FunctionConfig public functionConfig;
    ISwitchboard.FunctionState public functionState;

    address private functionCallId; // should this be an array?

    uint256 public nonce = 0;

    error MissingFunctionId(address);

    // TODO: requireEstimatedRunCostFee
    // TODO: minimumFee
    constructor(address functionId, address authority, address queueId, address[] memory permittedCallers) {
        mockFunctionId = functionId;
        functionAuthority = authority;
        functionQueueId = queueId;
        functionPermittedCallers = permittedCallers;
        functionEnclaveId = generateId();

        functionConfig = ISwitchboard.FunctionConfig({
            schedule: "",
            permittedCallers: functionPermittedCallers,
            containerRegistry: "dockerhub",
            container: "",
            version: "latest",
            paramsSchema: "",
            mrEnclaves: functionMrEnclaves,
            allowAllFnCalls: false,
            useFnCallEscrow: false
        });

        functionState = ISwitchboard.FunctionState({
            consecutiveFailures: 0,
            lastExecutionTimestamp: 0,
            nextAllowedTimestamp: block.timestamp,
            lastExecutionGasCost: 0,
            triggeredSince: 0,
            triggerCount: 0,
            queueIdx: 0,
            triggered: false,
            createdAt: block.timestamp
        });
    }

    function funcs(address functionId) public view returns (ISwitchboard.SbFunction memory) {
        if (mockFunctionId != functionId) {
            revert ISwitchboard.FunctionDoesNotExist(functionId);
        }

        return ISwitchboard.SbFunction({
            name: "",
            authority: functionAuthority,
            enclaveId: functionEnclaveId,
            queueId: functionQueueId,
            balance: functionBalance,
            status: functionStatus,
            config: functionConfig,
            state: functionState
        });
    }

    function callFunction(address functionId, bytes memory params) external payable returns (address callId) {
        // address msgSender = getMsgSender();

        if (functionId != mockFunctionId) {
            revert ISwitchboard.FunctionDoesNotExist(functionId);
        }

        // TODO: check estimateRunFee
        // Check permittedCallers

        callId = generateId();

        functionCallId = callId;
        // Emit FunctionCallEvent
        functionBalance += msg.value;
        // emit FunctionCallFund
    }

    function generateId() internal returns (address) {
        uint256 blockNumber = block.number;
        if (blockNumber > 0) {
            blockNumber -= 1;
        }
        bytes32 h = keccak256(abi.encodePacked(++nonce, blockhash(blockNumber)));
        return address(uint160(uint256(h)));
    }

    function getMsgSender() internal view returns (address payable signer) {
        signer = payable(msg.sender);
        if (msg.data.length >= 20 && signer == address(this)) {
            assembly {
                signer := shr(96, calldataload(sub(calldatasize(), 20)))
            }
        }
    }
}
