<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContentItem;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ContentItemController extends Controller
{
    public function index()
    {
        return ContentItem::orderBy('key')
            ->get()
            ->mapWithKeys(function (ContentItem $item) {
                return [$item->key => $item->value];
            });
    }

    public function show(string $key)
    {
        $item = ContentItem::where('key', $key)->firstOrFail();

        return ['key' => $item->key, 'value' => $item->value];
    }

    public function store(Request $request)
    {
        $payload = $request->validate([
            'key' => ['required', 'string', 'max:255'],
            'value' => ['required'],
            'type' => ['nullable', 'string', 'max:50'],
        ]);

        $item = ContentItem::updateOrCreate(
            ['key' => $payload['key']],
            ['value' => $payload['value'], 'type' => $payload['type'] ?? null]
        );

        return response()->json(['key' => $item->key, 'value' => $item->value]);
    }

    public function bulk(Request $request)
    {
        $payload = $request->validate([
            'items' => ['required', 'array'],
            'items.*.key' => ['required', 'string', 'max:255'],
            'items.*.value' => ['required'],
            'items.*.type' => ['nullable', 'string', 'max:50'],
        ]);

        foreach ($payload['items'] as $item) {
            ContentItem::updateOrCreate(
                ['key' => $item['key']],
                ['value' => $item['value'], 'type' => $item['type'] ?? null]
            );
        }

        return response()->json(['success' => true]);
    }

    public function destroy(string $key)
    {
        ContentItem::where('key', $key)->delete();

        return response()->json(['success' => true]);
    }
}
