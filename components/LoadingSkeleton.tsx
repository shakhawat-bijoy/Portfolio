import React from "react";

// Reusable skeleton components with glassmorphism effect
const SkeletonBox = ({ className = "" }: { className?: string }) => (
    <div
        className={`
      relative overflow-hidden rounded-xl
      bg-white/5 backdrop-blur-md
      border border-white/10
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      ${className}
    `}
    >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
);

const SkeletonText = ({ className = "" }: { className?: string }) => (
    <div
        className={`
      relative overflow-hidden rounded-lg h-4
      bg-white/10 backdrop-blur-sm
      border border-white/10
      ${className}
    `}
    >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
);

const GlassCard = ({ className = "", children }: { className?: string; children?: React.ReactNode }) => (
    <div
        className={`
      relative overflow-hidden rounded-2xl
      bg-gradient-to-br from-white/10 to-white/5
      backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      ${className}
    `}
    >
        {children}
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
);

// Navigation Skeleton
export const NavSkeleton = () => (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4">
        <GlassCard className="flex items-center justify-between gap-4 px-8 py-4">
            {/* Nav items */}
            <div className="flex gap-6 flex-1">
                {[1, 2, 3, 4].map((i) => (
                    <SkeletonText key={i} className="w-20 h-4" />
                ))}
            </div>

            {/* CTA Button */}
            <GlassCard className="h-10 w-32 flex items-center justify-center">
                <SkeletonText className="w-24 h-4" />
            </GlassCard>
        </GlassCard>
    </div>
);

// Hero Section Skeleton
export const HeroSkeleton = () => (
    <div className="md:pb-20 pb-0 md:pt-36 pt-28">
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-8">
                {/* Small text */}
                <SkeletonText className="w-48 h-3 mx-auto" />

                {/* Main heading */}
                <GlassCard className="h-32 w-full flex items-center justify-center p-8">
                    <div className="space-y-4 w-full">
                        <SkeletonText className="w-full h-6" />
                        <SkeletonText className="w-4/5 h-6 mx-auto" />
                        <SkeletonText className="w-3/4 h-6 mx-auto" />
                    </div>
                </GlassCard>

                {/* Subtitle */}
                <SkeletonText className="w-3/4 h-5 mx-auto" />

                {/* Buttons */}
                <div className="flex gap-5">
                    <GlassCard className="h-12 w-40 flex items-center justify-center">
                        <SkeletonText className="w-28 h-4" />
                    </GlassCard>
                    <GlassCard className="h-12 w-40 flex items-center justify-center">
                        <SkeletonText className="w-24 h-4" />
                    </GlassCard>
                </div>
            </div>
        </div>
    </div>
);

// Grid Section Skeleton
export const GridSkeleton = () => (
    <div className="py-20">
        <GlassCard className="w-64 h-10 mx-auto mb-12 flex items-center justify-center">
            <SkeletonText className="w-48 h-5" />
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <GlassCard key={i} className="h-64 p-6">
                    <div className="space-y-4">
                        <SkeletonBox className="h-12 w-12 rounded-full" />
                        <SkeletonText className="w-3/4 h-5" />
                        <div className="space-y-2">
                            <SkeletonText className="w-full h-3" />
                            <SkeletonText className="w-5/6 h-3" />
                            <SkeletonText className="w-4/5 h-3" />
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    </div>
);

// Projects Section Skeleton
export const ProjectsSkeleton = () => (
    <div className="py-20">
        <GlassCard className="w-80 h-12 mx-auto mb-12 flex items-center justify-center">
            <SkeletonText className="w-64 h-6" />
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <GlassCard key={i} className="h-96 p-6">
                    <div className="space-y-4 h-full flex flex-col">
                        <SkeletonBox className="flex-1 rounded-xl" />
                        <SkeletonText className="w-3/4 h-6" />
                        <div className="space-y-2">
                            <SkeletonText className="w-full h-3" />
                            <SkeletonText className="w-4/5 h-3" />
                        </div>
                        <div className="flex gap-2">
                            <SkeletonBox className="h-8 w-20 rounded-full" />
                            <SkeletonBox className="h-8 w-20 rounded-full" />
                            <SkeletonBox className="h-8 w-20 rounded-full" />
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    </div>
);

// Experience Section Skeleton
export const ExperienceSkeleton = () => (
    <div className="py-20">
        <GlassCard className="w-72 h-12 mx-auto mb-12 flex items-center justify-center">
            <SkeletonText className="w-56 h-6" />
        </GlassCard>

        <div className="space-y-8">
            {[1, 2, 3].map((i) => (
                <GlassCard key={i} className="p-6">
                    <div className="flex gap-6">
                        <SkeletonBox className="h-24 w-24 rounded-2xl flex-shrink-0" />
                        <div className="flex-1 space-y-4">
                            <SkeletonText className="w-3/4 h-5" />
                            <SkeletonText className="w-1/2 h-4" />
                            <div className="space-y-2">
                                <SkeletonText className="w-full h-3" />
                                <SkeletonText className="w-5/6 h-3" />
                                <SkeletonText className="w-4/5 h-3" />
                            </div>
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    </div>
);

// Approach Section Skeleton
export const ApproachSkeleton = () => (
    <div className="py-20">
        <GlassCard className="w-64 h-12 mx-auto mb-12 flex items-center justify-center">
            <SkeletonText className="w-48 h-6" />
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
                <GlassCard key={i} className="h-72 p-6">
                    <div className="space-y-4 h-full flex flex-col">
                        <SkeletonBox className="h-16 w-16 rounded-2xl" />
                        <SkeletonText className="w-3/4 h-5" />
                        <div className="space-y-2 flex-1">
                            <SkeletonText className="w-full h-3" />
                            <SkeletonText className="w-5/6 h-3" />
                            <SkeletonText className="w-4/5 h-3" />
                            <SkeletonText className="w-full h-3" />
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    </div>
);

// Footer Section Skeleton
export const FooterSkeleton = () => (
    <div className="py-20">
        <GlassCard className="p-8 space-y-8">
            <GlassCard className="w-96 h-16 mx-auto flex items-center justify-center">
                <SkeletonText className="w-80 h-8" />
            </GlassCard>

            <div className="flex justify-center gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <SkeletonBox
                        key={i}
                        className="h-12 w-12 rounded-full border-2 border-white/20"
                    />
                ))}
            </div>

            <div className="space-y-3">
                <SkeletonText className="w-64 h-4 mx-auto" />
                <SkeletonText className="w-48 h-3 mx-auto" />
            </div>
        </GlassCard>
    </div>
);

// Combined Page Skeleton
export const PageSkeleton = () => (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <HeroSkeleton />
            <GridSkeleton />
            <ProjectsSkeleton />
            <ExperienceSkeleton />
            <ApproachSkeleton />
            <FooterSkeleton />
        </div>
    </div>
);

export default PageSkeleton;