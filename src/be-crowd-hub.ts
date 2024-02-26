import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  BaseInitialized as BaseInitializedEvent,
  BurnNFTFromCollection as BurnNFTFromCollectionEvent,
  ClaimStakeEth as ClaimStakeEthEvent,
  ClaimYieldAndGas as ClaimYieldAndGasEvent,
  CreateCollectionStakeEthAmountSet as CreateCollectionStakeEthAmountSetEvent,
  DerivedRuleModuleWhitelisted as DerivedRuleModuleWhitelistedEvent,
  EmergencyAdminSet as EmergencyAdminSetEvent,
  GovernanceSet as GovernanceSetEvent,
  MaxRoyaltySet as MaxRoyaltySetEvent,
  ModuleGlobalsCurrencyWhitelisted as ModuleGlobalsCurrencyWhitelistedEvent,
  ModuleGlobalsGovernanceSet as ModuleGlobalsGovernanceSetEvent,
  ModuleGlobalsTreasuryFeeSet as ModuleGlobalsTreasuryFeeSetEvent,
  ModuleGlobalsTreasurySet as ModuleGlobalsTreasurySetEvent,
  NewCollectionCreated as NewCollectionCreatedEvent,
  NewNFTCreated as NewNFTCreatedEvent,
  RoyaltyDataSet as RoyaltyDataSetEvent,
  SetNewRoundReward as SetNewRoundRewardEvent,
  StakeAndYieldContractAddressSet as StakeAndYieldContractAddressSetEvent,
  StateSet as StateSetEvent
} from "../generated/BeCrowdHub/BeCrowdHub"
import {
  BaseInitialized,
  BurnNFTFromCollection,
  ClaimStakeEth,
  ClaimYieldAndGas,
  CreateCollectionStakeEthAmountSet,
  Creator,
  DerivedRuleModuleWhitelisted,
  EmergencyAdminSet,
  GovernanceSet,
  MaxRoyaltySet,
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
} from "../generated/schema"

export function handleBaseInitialized(event: BaseInitializedEvent): void {
  let entity = new BaseInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.symbol = event.params.symbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurnNFTFromCollection(
  event: BurnNFTFromCollectionEvent
): void {
  let nft = NewNFTCreated.load(Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.nftId)))
  if(nft != null){
    nft.nftInfoURI = ""
    nft.creator = Address.zero()
    nft.blockNumber = event.block.number
    nft.blockTimestamp = event.block.timestamp
    nft.transactionHash = event.transaction.hash
    nft.save()
    // store.remove('NewNFTCreated', Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.nftId)).toHexString());
  }

  let collection = NewCollectionCreated.load(Bytes.fromUint8Array(event.params.collectionId))
  if (collection != null) {  
    collection.items = collection.items.minus(BigInt.fromI32(1))
    collection.save()
  }

  let entity = new BurnNFTFromCollection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionId = event.params.collectionId
  entity.nftId = event.params.nftId
  entity.burner = event.params.burner
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimStakeEth(event: ClaimStakeEthEvent): void {
  let entity = new ClaimStakeEth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.claimAmount = event.params.claimAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimYieldAndGas(event: ClaimYieldAndGasEvent): void {
  let entity = new ClaimYieldAndGas(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddr = event.params.contractAddr
  entity.claimableYield = event.params.claimableYield
  entity.gasEtherBalance = event.params.gasEtherBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateCollectionStakeEthAmountSet(
  event: CreateCollectionStakeEthAmountSetEvent
): void {
  let entity = new CreateCollectionStakeEthAmountSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevStakeEthAmount = event.params.prevStakeEthAmount
  entity.newStakeEthAmount = event.params.newStakeEthAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDerivedRuleModuleWhitelisted(
  event: DerivedRuleModuleWhitelistedEvent
): void {
  let entity = new DerivedRuleModuleWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.whitelist = event.params.whitelist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyAdminSet(event: EmergencyAdminSetEvent): void {
  let entity = new EmergencyAdminSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.oldEmergencyAdmin = event.params.oldEmergencyAdmin
  entity.newEmergencyAdmin = event.params.newEmergencyAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovernanceSet(event: GovernanceSetEvent): void {
  let entity = new GovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxRoyaltySet(event: MaxRoyaltySetEvent): void {
  let entity = new MaxRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsCurrencyWhitelisted(
  event: ModuleGlobalsCurrencyWhitelistedEvent
): void {
  let entity = new ModuleGlobalsCurrencyWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.currency = event.params.currency
  entity.prevWhitelisted = event.params.prevWhitelisted
  entity.whitelisted = event.params.whitelisted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsGovernanceSet(
  event: ModuleGlobalsGovernanceSetEvent
): void {
  let entity = new ModuleGlobalsGovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsTreasuryFeeSet(
  event: ModuleGlobalsTreasuryFeeSetEvent
): void {
  let entity = new ModuleGlobalsTreasuryFeeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasuryFee = event.params.prevTreasuryFee
  entity.newTreasuryFee = event.params.newTreasuryFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsTreasurySet(
  event: ModuleGlobalsTreasurySetEvent
): void {
  let entity = new ModuleGlobalsTreasurySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasury = event.params.prevTreasury
  entity.newTreasury = event.params.newTreasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCollectionCreated(
  event: NewCollectionCreatedEvent
): void {
  let entity = new NewCollectionCreated(
    Bytes.fromUint8Array(event.params.collectionId)
  )
  entity.collectionOwner = event.params.collectionOwner
  entity.derivedCollectionAddr = event.params.derivedCollectionAddr
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.collectionId = event.params.collectionId
  entity.baseRoyalty = event.params.baseRoyalty
  entity.mintLimit = event.params.mintLimit
  entity.mintExpired = event.params.mintExpired
  entity.mintPrice = event.params.mintPrice
  entity.whiteListRootHash = event.params.whiteListRootHash
  entity.collInfoURI = event.params.collInfoURI
  entity.name = event.params.name;
  entity.items = BigInt.fromI32(0);

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewNFTCreated(event: NewNFTCreatedEvent): void {

  let account = Creator.load(event.params.creator)

  if (account == null) {
    account = new Creator(
      event.params.creator
    )
    account.address = event.params.creator
    account.itemsNFT = BigInt.fromI32(1);
    account.itemsCollection = BigInt.fromI32(1);
    let collections = account.detailsCollection;
    if(collections == null){
      collections = [];
    }
    collections.push(event.params.collectionId);
    account.detailsCollection = collections;
  }else{
    account.itemsNFT = account.itemsNFT.plus(BigInt.fromI32(1));
    let collections = account.detailsCollection;
    if(collections == null){
      collections = [];
    }
    let index = collections.indexOf(event.params.collectionId);
    if(index == -1){
      collections.push(event.params.collectionId);
      account.itemsCollection = account.itemsCollection.plus(BigInt.fromI32(1));
      account.detailsCollection = collections;
    }
  }
  account.save()

  let collection = NewCollectionCreated.load(Bytes.fromUint8Array(event.params.collectionId))

  if (collection == null) {
    return
  }
  collection.items = collection.items.plus(BigInt.fromI32(1))
  collection.save()

  let entity = new NewNFTCreated(
    Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.tokenId))
  )
  entity.tokenId = event.params.tokenId
  entity.collectionId = event.params.collectionId
  entity.derivedFrom = event.params.derivedFrom
  entity.collectionAddr = event.params.collectionAddr
  entity.creator = event.params.creator
  entity.nftInfoURI = event.params.nftInfoURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltyDataSet(event: RoyaltyDataSetEvent): void {
  let entity = new RoyaltyDataSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.royaltyAddr = event.params.royaltyAddr
  entity.percentage = event.params.percentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetNewRoundReward(event: SetNewRoundRewardEvent): void {
  let entity = new SetNewRoundReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rewardId = event.params.rewardId
  entity.rewardAmount = event.params.rewardAmount
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeAndYieldContractAddressSet(
  event: StakeAndYieldContractAddressSetEvent
): void {
  let entity = new StakeAndYieldContractAddressSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevStakeAndYieldContractAddress = event.params.prevStakeAndYieldContractAddress
  entity.newStakeAndYieldContractAddress = event.params.newStakeAndYieldContractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateSet(event: StateSetEvent): void {
  let entity = new StateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevState = event.params.prevState
  entity.newState = event.params.newState

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
