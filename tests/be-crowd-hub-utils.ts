import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  BaseInitialized,
  BurnNFTFromCollection,
  ClaimStakeEth,
  ClaimYieldAndGas,
  CreateCollectionStakeEthAmountSet,
  DerivedNFTInitialized,
  DerivedRuleModuleWhitelisted,
  EmergencyAdminSet,
  FeeModuleBaseConstructed,
  GovernanceSet,
  MaxRoyaltySet,
  ModuleBaseConstructed,
  ModuleGlobalsCurrencyWhitelisted,
  ModuleGlobalsGovernanceSet,
  ModuleGlobalsTreasuryFeeSet,
  ModuleGlobalsTreasurySet,
  NewCollectionCreated,
  NewNFTCreated,
  RoyaltyDataSet,
  SetNewRoundReward,
  StakeAndYieldContractAddressSet,
  StateSet
} from "../generated/BeCrowdHub/BeCrowdHub"

export function createBaseInitializedEvent(
  name: string,
  symbol: string,
  timestamp: BigInt
): BaseInitialized {
  let baseInitializedEvent = changetype<BaseInitialized>(newMockEvent())

  baseInitializedEvent.parameters = new Array()

  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return baseInitializedEvent
}

export function createBurnNFTFromCollectionEvent(
  collectionId: BigInt,
  nftId: BigInt,
  burner: Address,
  owner: Address,
  timestamp: BigInt
): BurnNFTFromCollection {
  let burnNftFromCollectionEvent = changetype<BurnNFTFromCollection>(
    newMockEvent()
  )

  burnNftFromCollectionEvent.parameters = new Array()

  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("burner", ethereum.Value.fromAddress(burner))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return burnNftFromCollectionEvent
}

export function createClaimStakeEthEvent(
  staker: Address,
  claimAmount: BigInt
): ClaimStakeEth {
  let claimStakeEthEvent = changetype<ClaimStakeEth>(newMockEvent())

  claimStakeEthEvent.parameters = new Array()

  claimStakeEthEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  claimStakeEthEvent.parameters.push(
    new ethereum.EventParam(
      "claimAmount",
      ethereum.Value.fromUnsignedBigInt(claimAmount)
    )
  )

  return claimStakeEthEvent
}

export function createClaimYieldAndGasEvent(
  contractAddr: Address,
  claimableYield: BigInt,
  gasEtherBalance: BigInt
): ClaimYieldAndGas {
  let claimYieldAndGasEvent = changetype<ClaimYieldAndGas>(newMockEvent())

  claimYieldAndGasEvent.parameters = new Array()

  claimYieldAndGasEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddr",
      ethereum.Value.fromAddress(contractAddr)
    )
  )
  claimYieldAndGasEvent.parameters.push(
    new ethereum.EventParam(
      "claimableYield",
      ethereum.Value.fromUnsignedBigInt(claimableYield)
    )
  )
  claimYieldAndGasEvent.parameters.push(
    new ethereum.EventParam(
      "gasEtherBalance",
      ethereum.Value.fromUnsignedBigInt(gasEtherBalance)
    )
  )

  return claimYieldAndGasEvent
}

export function createCreateCollectionStakeEthAmountSetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): CreateCollectionStakeEthAmountSet {
  let createCollectionStakeEthAmountSetEvent =
    changetype<CreateCollectionStakeEthAmountSet>(newMockEvent())

  createCollectionStakeEthAmountSetEvent.parameters = new Array()

  createCollectionStakeEthAmountSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  createCollectionStakeEthAmountSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  createCollectionStakeEthAmountSetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  createCollectionStakeEthAmountSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return createCollectionStakeEthAmountSetEvent
}

export function createDerivedNFTInitializedEvent(
  collectionId: BigInt,
  timestamp: BigInt
): DerivedNFTInitialized {
  let derivedNftInitializedEvent = changetype<DerivedNFTInitialized>(
    newMockEvent()
  )

  derivedNftInitializedEvent.parameters = new Array()

  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedNftInitializedEvent
}

export function createDerivedRuleModuleWhitelistedEvent(
  derivedRuleModule: Address,
  whitelist: boolean,
  timestamp: BigInt
): DerivedRuleModuleWhitelisted {
  let derivedRuleModuleWhitelistedEvent =
    changetype<DerivedRuleModuleWhitelisted>(newMockEvent())

  derivedRuleModuleWhitelistedEvent.parameters = new Array()

  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam("whitelist", ethereum.Value.fromBoolean(whitelist))
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedRuleModuleWhitelistedEvent
}

export function createEmergencyAdminSetEvent(
  caller: Address,
  oldEmergencyAdmin: Address,
  newEmergencyAdmin: Address,
  timestamp: BigInt
): EmergencyAdminSet {
  let emergencyAdminSetEvent = changetype<EmergencyAdminSet>(newMockEvent())

  emergencyAdminSetEvent.parameters = new Array()

  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldEmergencyAdmin",
      ethereum.Value.fromAddress(oldEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "newEmergencyAdmin",
      ethereum.Value.fromAddress(newEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return emergencyAdminSetEvent
}

export function createFeeModuleBaseConstructedEvent(
  moduleGlobals: Address,
  timestamp: BigInt
): FeeModuleBaseConstructed {
  let feeModuleBaseConstructedEvent = changetype<FeeModuleBaseConstructed>(
    newMockEvent()
  )

  feeModuleBaseConstructedEvent.parameters = new Array()

  feeModuleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "moduleGlobals",
      ethereum.Value.fromAddress(moduleGlobals)
    )
  )
  feeModuleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeModuleBaseConstructedEvent
}

export function createGovernanceSetEvent(
  caller: Address,
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): GovernanceSet {
  let governanceSetEvent = changetype<GovernanceSet>(newMockEvent())

  governanceSetEvent.parameters = new Array()

  governanceSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return governanceSetEvent
}

export function createMaxRoyaltySetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): MaxRoyaltySet {
  let maxRoyaltySetEvent = changetype<MaxRoyaltySet>(newMockEvent())

  maxRoyaltySetEvent.parameters = new Array()

  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return maxRoyaltySetEvent
}

export function createModuleBaseConstructedEvent(
  hub: Address,
  timestamp: BigInt
): ModuleBaseConstructed {
  let moduleBaseConstructedEvent = changetype<ModuleBaseConstructed>(
    newMockEvent()
  )

  moduleBaseConstructedEvent.parameters = new Array()

  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam("hub", ethereum.Value.fromAddress(hub))
  )
  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleBaseConstructedEvent
}

export function createModuleGlobalsCurrencyWhitelistedEvent(
  currency: Address,
  prevWhitelisted: boolean,
  whitelisted: boolean,
  timestamp: BigInt
): ModuleGlobalsCurrencyWhitelisted {
  let moduleGlobalsCurrencyWhitelistedEvent =
    changetype<ModuleGlobalsCurrencyWhitelisted>(newMockEvent())

  moduleGlobalsCurrencyWhitelistedEvent.parameters = new Array()

  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "prevWhitelisted",
      ethereum.Value.fromBoolean(prevWhitelisted)
    )
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelisted",
      ethereum.Value.fromBoolean(whitelisted)
    )
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsCurrencyWhitelistedEvent
}

export function createModuleGlobalsGovernanceSetEvent(
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): ModuleGlobalsGovernanceSet {
  let moduleGlobalsGovernanceSetEvent = changetype<ModuleGlobalsGovernanceSet>(
    newMockEvent()
  )

  moduleGlobalsGovernanceSetEvent.parameters = new Array()

  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsGovernanceSetEvent
}

export function createModuleGlobalsTreasuryFeeSetEvent(
  prevTreasuryFee: i32,
  newTreasuryFee: i32,
  timestamp: BigInt
): ModuleGlobalsTreasuryFeeSet {
  let moduleGlobalsTreasuryFeeSetEvent =
    changetype<ModuleGlobalsTreasuryFeeSet>(newMockEvent())

  moduleGlobalsTreasuryFeeSetEvent.parameters = new Array()

  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevTreasuryFee))
    )
  )
  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newTreasuryFee))
    )
  )
  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsTreasuryFeeSetEvent
}

export function createModuleGlobalsTreasurySetEvent(
  prevTreasury: Address,
  newTreasury: Address,
  timestamp: BigInt
): ModuleGlobalsTreasurySet {
  let moduleGlobalsTreasurySetEvent = changetype<ModuleGlobalsTreasurySet>(
    newMockEvent()
  )

  moduleGlobalsTreasurySetEvent.parameters = new Array()

  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasury",
      ethereum.Value.fromAddress(prevTreasury)
    )
  )
  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasury",
      ethereum.Value.fromAddress(newTreasury)
    )
  )
  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsTreasurySetEvent
}

export function createNewCollectionCreatedEvent(
  collectionOwner: Address,
  derivedCollectionAddr: Address,
  derivedRuleModule: Address,
  collectionId: BigInt,
  baseRoyalty: BigInt,
  mintLimit: BigInt,
  mintExpired: BigInt,
  mintPrice: BigInt,
  whiteListRootHash: Bytes,
  collInfoURI: string
): NewCollectionCreated {
  let newCollectionCreatedEvent = changetype<NewCollectionCreated>(
    newMockEvent()
  )

  newCollectionCreatedEvent.parameters = new Array()

  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionOwner",
      ethereum.Value.fromAddress(collectionOwner)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedCollectionAddr",
      ethereum.Value.fromAddress(derivedCollectionAddr)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseRoyalty",
      ethereum.Value.fromUnsignedBigInt(baseRoyalty)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintLimit",
      ethereum.Value.fromUnsignedBigInt(mintLimit)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintExpired",
      ethereum.Value.fromUnsignedBigInt(mintExpired)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice",
      ethereum.Value.fromUnsignedBigInt(mintPrice)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "whiteListRootHash",
      ethereum.Value.fromFixedBytes(whiteListRootHash)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collInfoURI",
      ethereum.Value.fromString(collInfoURI)
    )
  )

  return newCollectionCreatedEvent
}

export function createNewNFTCreatedEvent(
  tokenId: BigInt,
  collectionId: BigInt,
  derivedFrom: BigInt,
  creator: Address,
  nftInfoURI: string
): NewNFTCreated {
  let newNftCreatedEvent = changetype<NewNFTCreated>(newMockEvent())

  newNftCreatedEvent.parameters = new Array()

  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedFrom",
      ethereum.Value.fromUnsignedBigInt(derivedFrom)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam("nftInfoURI", ethereum.Value.fromString(nftInfoURI))
  )

  return newNftCreatedEvent
}

export function createRoyaltyDataSetEvent(
  caller: Address,
  royaltyAddr: Address,
  percentage: BigInt,
  timestamp: BigInt
): RoyaltyDataSet {
  let royaltyDataSetEvent = changetype<RoyaltyDataSet>(newMockEvent())

  royaltyDataSetEvent.parameters = new Array()

  royaltyDataSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  royaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyAddr",
      ethereum.Value.fromAddress(royaltyAddr)
    )
  )
  royaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "percentage",
      ethereum.Value.fromUnsignedBigInt(percentage)
    )
  )
  royaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return royaltyDataSetEvent
}

export function createSetNewRoundRewardEvent(
  rewardId: BigInt,
  rewardAmount: BigInt,
  merkleRoot: Bytes
): SetNewRoundReward {
  let setNewRoundRewardEvent = changetype<SetNewRoundReward>(newMockEvent())

  setNewRoundRewardEvent.parameters = new Array()

  setNewRoundRewardEvent.parameters.push(
    new ethereum.EventParam(
      "rewardId",
      ethereum.Value.fromUnsignedBigInt(rewardId)
    )
  )
  setNewRoundRewardEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )
  setNewRoundRewardEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )

  return setNewRoundRewardEvent
}

export function createStakeAndYieldContractAddressSetEvent(
  caller: Address,
  prevMaxBaseRoyalty: Address,
  newMaxBaseRoyalty: Address,
  timestamp: BigInt
): StakeAndYieldContractAddressSet {
  let stakeAndYieldContractAddressSetEvent =
    changetype<StakeAndYieldContractAddressSet>(newMockEvent())

  stakeAndYieldContractAddressSetEvent.parameters = new Array()

  stakeAndYieldContractAddressSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  stakeAndYieldContractAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromAddress(prevMaxBaseRoyalty)
    )
  )
  stakeAndYieldContractAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromAddress(newMaxBaseRoyalty)
    )
  )
  stakeAndYieldContractAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stakeAndYieldContractAddressSetEvent
}

export function createStateSetEvent(
  caller: Address,
  prevState: i32,
  newState: i32,
  timestamp: BigInt
): StateSet {
  let stateSetEvent = changetype<StateSet>(newMockEvent())

  stateSetEvent.parameters = new Array()

  stateSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "newState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stateSetEvent
}
